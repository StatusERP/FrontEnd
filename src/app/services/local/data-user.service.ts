import { KEYS_WEB_STORAGE } from './../../util/enums';
import { Injectable } from '@angular/core';
import { IDataUser } from '@app/page/user/models/data-user';
import { SessionStorageService } from './storage/storage.service';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class DataUserService {
	constructor(private _sessionStorageService: SessionStorageService) {}
	getToken(): string | undefined {
		const tokenUser = this._sessionStorageService.getItem<IDataUser>(KEYS_WEB_STORAGE.DATA_USER);
		return tokenUser?.token;
	}
	getFullName(): string | null {
		const dataUser = this._sessionStorageService.getItem<IDataUser>(KEYS_WEB_STORAGE.DATA_USER);
		if (dataUser !== null) {
			return dataUser.fullName;
		}
		return null;
	}
	isAdmin(): boolean | null {
		const dataUser = this._sessionStorageService.getItem<IDataUser>(KEYS_WEB_STORAGE.DATA_USER);
		if (dataUser !== null) {
			return dataUser.isAdmin;
		}
		return null;
	}
	isExpiredToken(): boolean {
		try {
			const dataUser = this._sessionStorageService.getItem<IDataUser>(KEYS_WEB_STORAGE.DATA_USER);
			if (dataUser != null && dataUser.token) {
				const decoded = jwtDecode<JwtPayload>(dataUser.token);
				const tokenExpired = Date.now() > decoded.exp! * 1000;
				return tokenExpired;
			}
			return true;
		} catch (error) {
			console.error(error);
			return true;
		}
	}
	existsStorega(): boolean {
		return this._sessionStorageService.getItem<IDataUser>(KEYS_WEB_STORAGE.DATA_USER) != null;
	}
}