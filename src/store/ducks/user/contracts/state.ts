export interface UserStateType {
	auth: boolean,
	user: any,
	error: string,
}

export interface authForm {
	login: string,
	password: string
}

export interface userTypes {
	id: number,
	login: string,
	password: string,
	refresh_id: string,
	name: string,
	surname: string,
}