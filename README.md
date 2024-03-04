# Gentleman_CleanArch_Practice

```typescript
// EXTERNA -> FRAMEWORK / DRIVER / UI -> Detalles de implementacion
// MOCKS -> STUBS

// TODO -> crear la interfaz BankAccount

interface DBBankAccount {
  id: string;
  data: BankAccount;
}

enum StatusStates {
  "SUCCESS" = "sucess",
  "FAILED" = "failed",
}

interface Status {
  status: StatusStates;
  message: string;
}

// Creamos la interfaz para un banco para abstraer la implementación
interface DBBankInterface {
  addOne: (bdUser: DBBankAccount) => Status;
  getOne: (id: string) => Status;
}

class DBBank implements DBBankInterface {
  listOfAccounts = new Map<string, BankAccount>();

  constructor() {}

  addOne(bdUser: DBBankAccount) {
    this.listOfAccounts.set(bdUser.id, bdUser.data);
    return {
      status: StatusStates.SUCCESS,
      message: "Se pudo guardar correctamente",
    };
  }

  getOne(id: string) {
    const user = this.listOfAccounts.get(id);
    if (!user) {
      return {
        status: StatusStates.FAILED,
        message: `couldn't find the bankAccount user`,
      };
    }
    return { status: StatusStates.SUCCESS, message: "bankAccount user found" };
  }
}

const bd = new DBBank();

// ADAPTERS -> NEXO entre USE CASE y EXTERNA
// NUNCA ACCEDER DE MANERA DIRECTA A UNA CAPA EXTERNA
// Creamos la interfaz para un el adaptador de la DB para abstraer la implementación
interface DBBankAdapterInterface {
  addOne(user: User): Status;
  getOne(id: string): Status;
}

class DBAdapter implements DBBankAdapterInterface {
  constructor(private readonly db: DBBank) {}

  addOne(user: User) {
    const newBankAccount = new BankAccount(user);
    const formattedData = {
      id: user.name,
      data: newBankAccount,
    };
    return this.db.addOne(formattedData);
  }

  getOne(id: string) {
    return this.db.getOne(id);
  }
}

// USE CASES -> Reglas de aplicación

class App {
  constructor(private readonly dbAdapter: DBBankAdapterInterface) {}
  register(user: User) {
    try {
      this.dbAdapter.addOne(user);
      return { status: StatusStates.SUCCESS, message: "anduvo papaaaaaa" };
    } catch (e: any) {
      return { status: StatusStates.FAILED, message: "no anduvo naaaa" };
    }
  }
}

// DOMINIO
interface User {
  name: string;
  lastName: string;
  age: number;
}

class BankAccount {
  user: User;
  minimumAge = 18;

  constructor(user: User) {
    if (this.checkMinimumAge(user)) {
      this.user = user;
    }
  }

  private checkMinimumAge(user: User) {
    return user.age >= this.minimumAge;
  }
}
```
