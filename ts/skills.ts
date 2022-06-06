import ProgressBar, { PathDrawingOptions } from 'progressbar.js';
import { AnimationSupport } from 'progressbar.js';
// import ProgressBar = require('progressbar.js');
// import utils = require('progressbar.js/utils');
interface SkillConfig {
    containerId: string;
    text: string;
    value: number;
    type: 'circle' | 'bar';
    loadedColor: string;
    containerColor: string;
    textColor: string;
}
export class Skills {
    private _skills: SkillConfig[];
    // private _languages: SkillConfig[];
    /**
     *
     */
    constructor() {
        this._skills = [
            {
                containerId: 'after-effects',
                text: 'After Effects',
                value: 0.85,
                type: 'bar',
                containerColor: '#000',
                loadedColor: '#fff',
                textColor: '#fff',
            },
        ];
    }
    public initLanguages() {}
    public initSkills() {
        const bar = new ProgressBar.Line('#container', {
            step: (state, bar, attachment) => {
                bar.path!.setAttribute('stroke', state.color);
            },
        });

        const opts = {
            from: { color: '#000 ' },
            to: { color: '#888' },
        };
        bar.animate(0.5, opts);
        let opt: ProgressBar.PathDrawingOptions = {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: this._skills[0].loadedColor,
            trailColor: this._skills[0].containerColor,
            trailWidth: 4,
            svgStyle: { width: '100%', height: '100%' },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: this._skills[0].loadedColor,
                    position: 'absolute',
                    right: '0',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                },
                autoStyleContainer: false,
            },
            from: { color: '#FFEA82' },
            to: { color: '#ED6A5A' },
        };

        // let animationOptions: AnimationSupport = {
        //     step: (state, bar) => {
        //         bar.setText(Math.round(bar.value() * 100) + ' %');
        //     },
        // };

        let animationOptions: PathDrawingOptions = {
            step: (state, bar, attachment) => {
                bar.path!.setAttribute('text', Math.round(bar.value() * 100) + ' %');
            },
        };

        new ProgressBar.Line(`#${this._skills[0].containerId}`, animationOptions).animate(1.0);
    }
}
