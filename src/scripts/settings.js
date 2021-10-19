/* =================== SETTINGS.JS ================= 
 * Settings for various aspects of the application.
 * Gets imported into different modules.
 * Ensure that the selectors described here match
 * the selectors used in index.html
 */


// Use with AVA, given that Node can't access a browser context
if (typeof window === "undefined")
{
    global.window = {
        innerWidth: 1000
    }
}

export default {
    
    /* =============  THREE JS  =============== */

    VIEWER_BG_COLOR: 0xe3e3e3,
    VIEWER_LINE_COLOR: 0x000000,
    VIEWER_WIDTH: window.innerWidth * 0.5,
    VIEWER_HEIGHT: 500,
    VIEWER_DOM_ELEMENT: "#three",
    VIEWER_CAMERA_POSITION: [0, -3, 3],
    VIEWER_CENTER_BUTTON_ID: "viewer-center-button",
    VIEWER_DOWNLOAD_BUTTON_ID: "viewer-save-button",

    /* ============ EDITOR  ========== */

    EDITOR_DOM_ELEMENT: "jar",
    EDITOR_FONT_FAMILY: "monospace",
    EDITOR_FONT_SIZE: "18px",
    EDITOR_PADDING: 20,
    EDITOR_CORRECT_INDICATOR_COLOR: '#668c4a',
    EDITOR_INCORRECT_INDICATOR_COLOR: '#bb2020',

    /* ============ SHAPE CREATION  ========== */

    SAMPLE_RATE: 20,
    RESOLUTION: 20,

    /* ============ GENERAL ========== */

    MAX_RANGE_NUM: 100_000,
    MIN_RANGE_NUM: -100_000,
    MAX_RESOLUTION: 140,
    MAX_SAMPLING: 100,

    /* ============ SELEKTAAAAH ========== */

    DROPDOWN_PARENT: ".dropdown",
    DROPDOWN_BUTTON: ".d-button",
    DROPDOWN_PANE: ".d-body",
    DROPDOWN_LIST: "#example-list",

    /* ============ TEXT ========== */
    
    DEFAULT_TEXT: 
    `/* This is the editor status --> */

/* You can change settings like so: */ 

# resolution 35 
# sampling 50 
# color rgb(0, 0, 0) 
# bgcolor rgb(227, 227, 227)

/* Declare ranges like so: */ 

{ u, v | 0 <= u <= 2*PI, -1 <= v <= 2 }

/* Declare x, y, and z formulas like so: */ 

x = cos(u)
y = sin(u)
z = v 

/* The order of settings, then ranges, then formulas must be respected! */`
}
