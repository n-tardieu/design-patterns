class PlumbingSysthem {
    setPressure(v: number) { }
    turnOn() { }
    turnOff() { }
}

class ElectricalSysthem {
    setVoltage(v: number) { }
    turnOn() { }
    turnOff() { }
}

class House {
    private plumbing = new PlumbingSysthem()
    private electrical = new ElectricalSysthem()

    public turnOnSysthems() {
        this.plumbing.setPressure(500)
        this.plumbing.turnOn()

        this.electrical.setVoltage(130)
        this.electrical.turnOn()
    }

    public shutDown() {
        this.plumbing.turnOff()
        this.electrical.turnOff()
    }
}


const client = new House();
client.turnOnSysthems()
client.shutDown()