import {Component, Input, OnInit} from '@angular/core';
import {HeroInterface} from './interfaces/hero.interface';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-dynamic-form',
    template: `
        <h3>商品规格表单</h3>
        <form [formGroup]="commodityForm">
            <p><label>name:</label><input type="text" formControlName="name"/></p>
            <div>
                <h4>规格
                    <button (click)="addSpec()">新增规格</button>
                </h4>
                <div class="spec-list" *ngFor="let spec of this.specArr">
                    <p>
                        <label>规格名称</label>
                        <input type="text" [formControlName]="spec.name"/>
                        <button (click)="deleteSpec(spec.name)">删除规格</button>
                    </p>
                    <div class="spec-value" [formArrayName]="spec.name + '_values'">
                        <p *ngFor="let s of getSpec(spec.name + '_values').controls; let i = index">
                            <label>spec value</label>
                            <input [formControlName]="i"/>
                            <button (click)="removeSpecValue(spec.name, i)">删除规格值</button>
                        </p>
                        <button (click)="addSpecValue(spec.name)">规格值</button>
                    </div>
                </div>
            </div>
            <p>
                <button class="submit" (click)="submit()">submit</button>
            </p>
        </form>

    `
})
export class DynamicFormComponent implements OnInit {

    commodityForm: FormGroup;

    specArr: { name: string, controlArr: FormArray }[] = [];

    constructor(
        private fb: FormBuilder,
    ) {

    }

    ngOnInit(): void {

        this.commodityForm = new FormGroup({
            name: new FormControl('鞋子'),
            // spec_1: this.fb.array([this.fb.control('')]),
            // spec_2: this.fb.array([this.fb.control('')]),
            // spec_3: this.fb.array([this.fb.control('')]),
        });
    }

    getSpec(name): FormArray {
        return this.commodityForm.get(name) as FormArray;
    }

    addSpec() {
        const name = 'spec' + this.specArr.length;
        const formGroup = this.fb.array([this.fb.control('new spec value')]);
        this.commodityForm.addControl(name, this.fb.control('new spec'));
        this.commodityForm.addControl(name + '_values', formGroup);
        this.specArr.push({
            name,
            controlArr: formGroup,
        });
    }

    deleteSpec(name) {
        // 删除form中的控件
        this.commodityForm.removeControl(name);
        this.commodityForm.removeControl(name + '_values');
        // 删除数组
        const index = this.specArr.findIndex(item => item.name === name);
        this.specArr.splice(index, 1);
        console.log('index', index);
    }

    addSpecValue(name: string) {
        const spec = this.commodityForm.get(name + '_values') as FormArray;
        spec.push(this.fb.control(`${name} value`, Validators.required));
    }

    removeSpecValue(name: string, i) {
        console.log(name, i);
        const specArr = this.commodityForm.get(name + '_values') as FormArray;
        specArr.removeAt(i);
    }

    submit() {
        const value = this.commodityForm.getRawValue();
        console.log('value', value);
    }
}
