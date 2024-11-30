'use client';

import { AppRegistration, ArrowDropDown } from '@mui/icons-material';

import { DialogSelect } from '@/components/fields/simple/DialogSelect';
import { MenuButton } from '@/components/reused/menu-button/MenuButton';
import { QueryErrorMessage } from '@/components/reused/query-error-message/QueryErrorMessage';

import { semesterOptions } from '@/lib/constants/options';
import { useShowHide } from '@/lib/hooks/useShowHide';
import { useUpdateSemesterMutation } from '@/lib/services/profile';

export const SettingsSemester = ({ semester }: { semester: number }) => {
	const [updateSemester, { error, isLoading }] = useUpdateSemesterMutation();

	const select = useShowHide();

	const handleChange = (newValue: number) => {
		updateSemester({ semester: newValue });
	};

	return (
		<>
			<QueryErrorMessage error={error} />

			<DialogSelect
				open={select.isShow}
				onClose={select.hide}
				label='Семестр'
				options={semesterOptions}
				value={semester}
				onChange={handleChange}
				dense
			/>

			<MenuButton
				icon={<AppRegistration />}
				text='Изменить семестер'
				rightSlot={<ArrowDropDown className='text-black/80' />}
				onClick={select.show}
				loading={isLoading}
			/>
		</>
	);
};
