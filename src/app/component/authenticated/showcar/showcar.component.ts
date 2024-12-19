import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcar',
  templateUrl: './showcar.component.html',
  styleUrls: ['./showcar.component.css']
})
export class ShowcarComponent {
  route:Router = inject(Router);
  // List of car images
  carImages: string[] = [
    '../../../../assets/imgs/Aston-Martin-Car-Wallpaper-for-Download.jpg',
    '../../../../assets/imgs/Ferrari-Car-Wallpaper.jpg',
    '../../../../assets/imgs/Lamborghini-Car-Wallpaper.jpg',
    // '../../../../assets/imgs/Porsche-Car-Wallpaper.jpg',
    // '../../../../assets/imgs/Mercedes-Car-Wallpaper.jpg',
    // '../../../../assets/imgs/BMW-Car-Wallpaper.jpg',
  ];

  // Current start index for the group
  currentIndex: number = 0;

  // Number of images per group
  imagesPerGroup: number = 3;

  // Get the current group of images
  get currentGroup(): string[] {
    return this.carImages.slice(
      this.currentIndex,
      this.currentIndex + this.imagesPerGroup
    );
  }

  // Move to the previous group of images
  previousGroup() {
    this.currentIndex =
      (this.currentIndex - this.imagesPerGroup + this.carImages.length) %
      this.carImages.length;
  }

  // Move to the next group of images
  nextGroup() {
    this.currentIndex =
      (this.currentIndex + this.imagesPerGroup) % this.carImages.length;
  }
  back(){
    this.route.navigateByUrl("/home")
  }
}