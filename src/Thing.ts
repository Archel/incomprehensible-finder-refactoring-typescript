class Thing {
    public name: string;
    public birthDate: Date;

    public getName(): string {
        return this.name;
    }
    
    public setName(name: string ) {
        this.name = name;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

export default Thing;
