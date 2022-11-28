const os: 'ios' | 'android' = 'ios'

class IOSButton { }
class AndroidButton { }

// without factory Pattern
const customButton = os === 'ios' ? new IOSButton() : new AndroidButton()
const customButton2 = os === 'ios' ? new IOSButton() : new AndroidButton()
const customButton3 = os === 'ios' ? new IOSButton() : new AndroidButton()



// with factory
class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory()
const btn1 = factory.createButton(os)