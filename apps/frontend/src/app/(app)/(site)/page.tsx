export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { HomeComponent } from '@gitroom/frontend/components/home/home.component';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: isGeneralServerSide() ? 'Apostol - Boost Your TikTok Success with AI' : 'Gitroom - Boost Your Social Media Success',
  description: 'Monitor trends, discover niches, and post content with ease.',
};

export default async function HomePage() {
  return <HomeComponent />;
}

