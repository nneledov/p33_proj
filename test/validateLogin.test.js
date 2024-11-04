import 'jsdom-global/register.js';
import {expect} from "chai";
import { validateLogin } from '../public/script';

describe('validateLogin', ()=> {
    it(`should return true for valid user and pwd`, ()=>{
        expect(validateLogin('user', 'pass')).to.be.true;
    });
    it('should return true for correct username and correct password', ()=> {
        expect (validateLogin("correct username", "correct password")).to.be.true;
    });
    it('should return false for incorrect username and correct password' , ()=> {
        expect(vaildateLogin("correct username" , "correct passowrd")).to.be.false;
    })
    it('should return false for correct username and incorrect password' , ()=> {
        expect (validateLogin("correct username" , "correct password")).to.be.false;
    })
    it('should return false for incorrect username and incorrect password' , ()=> {
        expect (validateLogin("correct username", "correct password" )).to.be.false;
    })
});