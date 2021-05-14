import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  something = 'great';
  inputField = '';
  myStyle = { backgroundColor: 'magenta' };
  handleClickButon = () => {
    this.something += 'nice';
  };
  transThing = (x: string) => {
    return x + x;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
