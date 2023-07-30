export type AccountEntity = {
    id: string;
    name: string;
    lastName: string;
    age: number;
};

export type AddAccountParams = Omit<AccountEntity, "id">;

