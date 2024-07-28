import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  flavours = ['Liquorice and Blackcurrent', 'Stem Ginger', 'Lemon Meringue'];
  constructor() {
    let icecreamFlavour = `Strawberry`;

    console.log(typeof icecreamFlavour); // 'string'
    console.log(icecreamFlavour.length); // 10
    console.log(icecreamFlavour.toUpperCase()); // 'STRAWBERRY'

    /**
     * Multiline Strings
     */
    let tip = `The \`<h1>\` tag is used for 'Heading 1'.`;

    console.log(tip);
    let order =
      'Pistachio \
    Chocolate and Mint \
    Matcha';
    console.log(order);
    // The \ character lets us type the string over multiple line. To print on a new line we need to include \n as well.
    let order2 =
      'Pistachio \n\
    Chocolate and Mint \n\
    Matcha';

    console.log(order2);
    /**
     * String Interpolation
     */
    let orders = [
      { scoops: 1, flavour: 'Maple Wallnut' },
      { scoops: 1, flavour: 'Buttered Pecan' },
      { scoops: 1, flavour: 'Coconut Bounty' },
    ];

    let numberOfScoops = orders.reduce((prev, cur) => prev + cur.scoops, 0);
    let receipt = `${numberOfScoops}:   
    ${orders[0].scoops} ${orders[0].flavour}   
    ${orders[1].scoops} ${orders[1].flavour}   
    ${orders[2].scoops} ${orders[2].flavour}`;
    console.log(receipt);
    /**
     * Nesting Template Literals
     */
    let receipt2 = `${numberOfScoops} ${
      numberOfScoops > 1 ? 'scoops' : 'scoop'
    }:   
    ${orders.map((item) => `${item.scoops} ${item.flavour}`).join(`  
    `)}  
`;
  
  }
}
