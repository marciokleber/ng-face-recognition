import { Component } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  capturedImages: WebcamImage[] = [];

  // Subject utilizado para acionar a captura da imagem
  private trigger: Subject<void> = new Subject<void>();

  // Observable para escutar o trigger
  triggerObservable: Observable<void> = this.trigger.asObservable();

  // Método para acionar o trigger e capturar a imagem
  triggerSnapshot(): void {
    this.trigger.next();
  }

  // Método chamado quando a imagem é capturada
  // handleImage(webcamImage: WebcamImage): void {
  //   console.info('Imagem capturada:', webcamImage.imageAsDataUrl);
  //   // Aqui você pode trabalhar com a imagem capturada (webcamImage.imageAsDataUrl)
  // }

  // Método chamado quando a imagem é capturada
  handleImage(webcamImage: WebcamImage): void {
    this.capturedImages.push(webcamImage);
  }

  // Método para tratar erros de inicialização da webcam
  handleInitError(error: any): void {
    console.error('Erro ao iniciar a webcam:', error);
  }

}
