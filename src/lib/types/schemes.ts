export interface LoginSchema {
	fullName: string;
	password: string;
	semester: number;
}

export interface UpdateSemesterSchema {
	semester: number;
}
