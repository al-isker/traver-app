import { Metadata, NextPage } from 'next';

import { PrivacyPolicy } from '@/components/screens/PrivacyPolicy';

export const metadata: Metadata = {
	title: 'Политика конфиденциальности'
};

const PrivacyPolicyPage: NextPage = () => <PrivacyPolicy />;

export default PrivacyPolicyPage;
