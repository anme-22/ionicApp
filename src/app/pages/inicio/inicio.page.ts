import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: ' Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: ' Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-circle-outline',
      name: ' Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: ' Buttons',
      redirectTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
