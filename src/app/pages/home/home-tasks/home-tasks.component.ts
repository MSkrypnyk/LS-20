import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.scss'
})
export class HomeTasksComponent {
  public tasks = [
    {
      id: Date.now(),
      title: 'Daily astromeditation',
      number: 3,
    },
    {
      id: Date.now(),
      title: 'Daily sleep astromeditation',
      number: 2,
    },
    {
      id: Date.now(),
      title: 'Daily mantra',
      number: 1,
    }
  ]

  public progress = {
    value: '60%',
  }

  public poll = [
    {
      title: 'How was your day?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio enurna ultrice...',
      icons: 'calendar_today',
      iconsArrow: 'navigate_next'
    },

    {
      title: 'Current Transist: 3rd House?',
      desc: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...',
      icons: 'schedule',
      iconsArrow: 'navigate_next',
      class: 'block-2'
    }
  ]
}
