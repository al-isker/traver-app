import { Metadata, NextPage } from 'next';

import { RatingById } from '@/components/screens/RatingById';

export const metadata: Metadata = {
	title: 'Рейтинг'
};

const RatingByIdPage: NextPage = () => <RatingById />;

export default RatingByIdPage;
