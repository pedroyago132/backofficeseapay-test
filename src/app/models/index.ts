export interface User{
	email: string;
	password: string;
    account_type: string;
	name: string;
	registration: string;
};

export interface LoginEnum{
	password: string;
    login: string;
};


export interface TableElement {
	tipo: string;
	valor: number;
	status: string;
	conta: string;
	chave: string;
	data: string;
	nome: string;
  }