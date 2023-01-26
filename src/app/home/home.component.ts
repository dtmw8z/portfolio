import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  base64string: any;
  fileUrl: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.convertToBase64('assets/cv.pdf');
  }

  convertToBase64(file: any) {
    this.http.get(file, { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        //Here you can do whatever you want with the base64 String
        this.base64string = event.target.result;
      };

      reader.onerror = (event: any) => {
        alert('Error: File could not be read');
      };
    });
  }

  downloadPdf() {
    const source = this.base64string;
    const downloadLink = document.createElement('a');
    const fileName = 'cv.pdf';
    downloadLink.href = source;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
