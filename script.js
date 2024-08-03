const clog              = console.log
const cerr              = console.error
const select            = (selector) => document.querySelector(selector)
const selectAll         = (selector) => document.querySelectorAll(selector)


// 1. fill the board with X . Y grid
let PIXEL_SIDE_LENGTH   = 15                               // the dimensions in actual pixels of the pixelDiv
let WIDTH               = 50                               // resolution: how many horizontal pixels
let HEIGHT              = 50                               // resolution: how many vertical   pixels

const PARENT_DIV        = select('.board')
PARENT_DIV.style.width  = `${PIXEL_SIDE_LENGTH * WIDTH }px`
PARENT_DIV.style.height = `${PIXEL_SIDE_LENGTH * HEIGHT}px`


// rendering pixels into the parent div, and add event listeners to each
for (let i = 0; i < WIDTH*HEIGHT; i++) 
{
    const pixelDiv        = document.createElement('div')
    pixelDiv.className    = "pixel"
    pixelDiv.style.width  = `${PIXEL_SIDE_LENGTH}px`
    pixelDiv.style.height = `${PIXEL_SIDE_LENGTH}px`

    pixelDiv.addEventListener('mousemove', e => 
        {
            if (e.buttons) // e.button has the value 1 when the left mouse button is clicked
            {
                pixelDiv.style['background-color'] = 'black'
            }
        }
    )


    PARENT_DIV.appendChild(pixelDiv)
}