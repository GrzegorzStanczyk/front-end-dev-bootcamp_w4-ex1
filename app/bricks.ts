import {Sprite} from './sprite';

export class Brick extends Sprite {
    livesLeft: number = 1;

    wasHit(): boolean {
        return --this.livesLeft < 1;
    }

    markHit() {}
}

export class HardBrick extends Brick {
    livesLeft: number = 2;
    markHit() {
        this.sprite.classList.add('hit');
    }
}

export class ImmortalBrick extends HardBrick {
    wasHit(): boolean {
        return false;
    }
}
