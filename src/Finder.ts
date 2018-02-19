import F from "./F";
import FT from "./FT";
import Thing from "./Thing";

class Finder {
    private _P: Thing[];

    constructor(P: Thing[]) {
        this._P = P;
    }

    public Find(ft: FT): F {
        const tr = [];
        const date = new Date();
        for (let i: number = 0; i < this._P.length - 1; i++) {
            for (let j = i + 1; j < this._P.length; j++) {
                const r = new F();
                
                if (this._P[i].getBirthDate().getTime() < this._P[j].getBirthDate().getTime()) {
                    r.P1 = this._P[i];
                    r.P2 = this._P[j];
                } else {
                    r.P1 = this._P[j];
                    r.P2 = this._P[i];
                }
                
                r.D = r.P2.getBirthDate().getTime() - r.P1.getBirthDate().getTime();

                tr.push(r);
            }
        }

        if (tr.length < 1) {
            return new F();
        }

        let answer = tr[0];
        tr.forEach((result: F) => {
            switch (ft) {
                case FT.One:
                    if (result.D < answer.D) {
                        answer = result;
                    }
                    break;
                case FT.Two:
                    if (result.D > answer.D) {
                        answer = result;
                    }
                    break;
            }
        });

        return answer;
    }
}

export default Finder;
