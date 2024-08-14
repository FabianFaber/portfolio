import { Component, OnInit } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import  AOS  from 'aos';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutMeComponent, PortfolioComponent, SkillsComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent  implements OnInit{
  ngOnInit(){
    AOS.init();
  }

}
