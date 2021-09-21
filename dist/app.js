import { PageComponent } from './components/page/page.js';
import { ImageComonent } from './components/page/item/image.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComonent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
