import {animate, animation, keyframes, style} from '@angular/animations';

export const PairsPriceAnimation = animation(
    animate('.3s ease-out', keyframes([
        style({
            background: '{{ linearGradient }}',
            backgroundPosition: '200%',
            backgroundSize: '200%, 100%',
            offset: 0,
        }),
        style({
            backgroundPosition: '100%',
            offset: .9,
        }),
        style({
            backgroundPosition: '50%',
            offset: 1,
        })
    ])),

);
// 升降的枚举
export enum PairsPriceStateEnum {
    RAISE = 'raise',
    FALL = 'fall',
    ZERO = 'zero',
}
// 升降的颜色
export const raiseColor = 'linear-gradient(0.25turn, #fff, green);';
export const fallColor = 'linear-gradient(0.25turn, #fff, red);';
