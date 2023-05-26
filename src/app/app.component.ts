import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    title = "smart-home-web";

    constructor(private observer: BreakpointObserver) {}

    ngAfterViewInit() {
      this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = "over";
          this.sidenav.close().catch(() => console.log("sidenav close error"));
        } else {
          this.sidenav.mode = "side";
          this.sidenav.open().catch(() => console.log("sidenav open error"));
        }
      });
    }
}
