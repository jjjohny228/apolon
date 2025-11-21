import { sign, verify } from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export class AuthService {
  static hashPassword(password: string) {
    return hashSync(password, 10);
  }
  static comparePassword(password: string, hash: string) {
    return compareSync(password, hash);
  }
  static signJWT(value: object) {
    return sign(value, process.env.JWT_SECRET!);
  }
  static verifyJWT(token: string) {
    return verify(token, process.env.JWT_SECRET!);
  }

  static fixedEncryption(value: string) {
    // encryption algorithm
    const algorithm = 'aes-256-cbc';

    // Create a 32-byte key from JWT_SECRET using SHA-256
    const key = crypto.createHash('sha256').update(process.env.JWT_SECRET!).digest();

    // Create a deterministic IV from JWT_SECRET (first 16 bytes of MD5 hash)
    // This ensures backward compatibility with existing encrypted data
    const iv = crypto.createHash('md5').update(process.env.JWT_SECRET!).digest().slice(0, 16);

    // create a cipher object with explicit key and IV
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // encrypt the plain text
    let encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }

  static fixedDecryption(hash: string) {
    const algorithm = 'aes-256-cbc';

    // Create a 32-byte key from JWT_SECRET using SHA-256
    const key = crypto.createHash('sha256').update(process.env.JWT_SECRET!).digest();

    // Create a deterministic IV from JWT_SECRET (first 16 bytes of MD5 hash)
    // This ensures backward compatibility with existing encrypted data
    const iv = crypto.createHash('md5').update(process.env.JWT_SECRET!).digest().slice(0, 16);

    // create a decipher object with explicit key and IV
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    // decrypt the encrypted text
    let decrypted = decipher.update(hash, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}
