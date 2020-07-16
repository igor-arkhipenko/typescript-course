interface Rectangle {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rectangle = {
    id: '1',
    size: {
        width: 11,
        height: 12
    },
    color: '#ccc'
}

const rect2: Rectangle = {
    id: '2',
    size: {
        width: 5,
        height: 6,
    }
}

rect2.color = '#000'
// rect2.id = '333'

const rect3 = {} as Rectangle
const rect4 = <Rectangle>{}

// ==========================

interface RectWithArea extends Rectangle {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '5',
    size: {
        height: 15,
        width: 15,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===========================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    
    setTime(date: Date): void {
        this.time = date
    }
}

// ===========================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '2px solid black',
    marginTop: '4px',
    textAlign: 'left'
}
