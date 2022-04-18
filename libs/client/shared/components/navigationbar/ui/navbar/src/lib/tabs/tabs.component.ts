
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-tabs-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  changeTab(id:string): void{
    const active=document.getElementsByClassName("selected");
    active[0].classList.remove('selected');
    const temp=document.getElementById(id);
    if(temp!=null)
    {
      temp.classList.add("selected");
    }
  }
}
