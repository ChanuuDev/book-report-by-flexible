import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.addEventListener('DOMContentLoaded', () => {
      let scrollPos = 0;
      const mainNav = document.getElementById('mainNav');

      if (mainNav !== null) {
        const headerHeight = mainNav.clientHeight;
        window.addEventListener('scroll', function() {
          const currentTop = document.body.getBoundingClientRect().top * -1;
          if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-visible');
            } else {
              mainNav.classList.remove('is-visible', 'is-fixed');
            }
          } else {
            // Scrolling Down
            // @ts-ignore
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-fixed');
            }
          }
          scrollPos = currentTop;
        });
      }

    })
  }

  ngAfterViewInit(): void {

  }

  clickEventTest(data: any): void {
    console.log('data -> ', data);

  }

  move(path: string): void {
    this.router.navigateByUrl(path).then(() => {});
  }

}
