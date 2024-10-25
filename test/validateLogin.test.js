import 'jsdom-global/register.js';
import {expect} from "chai";
import { validateLogin } from '../public/script';

describe('validateLogin', ()=> {
    it(`should return true for valid user and pwd`, ()=>{
        expect(validateLogin('user', 'pass')).to.be.true;
    });
});