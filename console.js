function CustomConsole() {
    this.create = function(x, y, clr, txtClr, borderRadius, borderClr, width, height, id) {
        console.log(`Desired X: ${x}px`);
        console.log(`Desired Y: ${y}px`);
        console.log(`Desired color: rgb(${clr})`);
        console.log(`Desired text color: rgb(${txtClr})`);
        console.log(`Desired Border Radius: ${borderRadius}px`);
        console.log(`Desired Width: ${width}px`);
        console.log(`Desired Height: ${height}px`);
        console.log(`Desired ID: ${id}`);

        this.object = document.createElement('div');
        this.object.style.position = 'absolute';
        this.object.style.paddingLeft = '10px';
        this.object.style.paddingRight = '10px';
        this.object.style.paddingTop = '10px';
        this.object.style.paddingBottom = '10px';
        this.object.style.fontFamily = 'arial';
        this.object.style.left = x + 'px';
        this.object.style.top = y + 'px';
        this.object.style.backgroundColor = `rgb(${clr})`;
        this.object.style.color = `rgb(${txtClr})`;
        this.object.style.borderRadius = borderRadius + 'px';
        if (borderClr.startsWith('#')) {
            this.object.style.border = `2px solid ${borderColor}`;
        } else if (borderClr.startsWith('rgb(')) {
            this.object.style.border = `2px solid ${borderColor}`;
        } else {
            console.log(`No borderClr attribute, assuming rgb() format`)
            this.object.style.border = `2px solid rgb(${borderColor})`;
        }
        this.object.style.width = width + 'px';
        this.object.style.height = height + 'px';
        this.object.id = id;

        document.body.appendChild(this.object);
    }

    this.log = function(msg) {
        if (this.object) {
            this.object.innerText = `> ${msg}`;
        } else {
            console.error('No object created yet. Call create() first.');
        }
    }
}