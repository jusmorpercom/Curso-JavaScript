class Cliente extends  Persona{
    static contadorCliente = 0;

    constructor(fechaRegistro){
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegsitro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this.fechaRegistro
    }

    set fechaRegistro(fechaRegistro){
        this._fecahRegsitro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this.fechaRegistro}`
    }
}   