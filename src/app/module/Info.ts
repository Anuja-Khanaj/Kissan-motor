export class Info{
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _expiresIn: Date
    ){
        
    }
}