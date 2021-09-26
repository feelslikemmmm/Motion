import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="video__title"></h3>
          </section>`);
    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    console.log(url);
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    // const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    // const match = url.match(regExp);
    const splited = url.split('=');
    const videoId = splited[splited.length - 1];
    return `https://www.youtube.com/embed/${videoId}`;
    // const videoId = match ? match[1] || match[2] : undefined;
    // if (videoId) {

    // }
    // return url;
  }
}
