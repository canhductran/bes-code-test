import React from 'react';
import OriginalNumberFormComponent from '../original-number-form/original-number-form.component';
import ReverseNumberFormComponent from '../reverse-number-form/reverse-number-form.component';

class ReverseNumberGameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.originalNumberInput = React.createRef();

        this.state = {
            originalNumber: '',
            reverseNumber: '',
            resultMessage: ''
        }
    }

    onSubmitOriginalNumber = event => {
        event.preventDefault();
        let originalNumber = this.originalNumberInput.current.value;

        this.setState({
            originalNumber: originalNumber
        });
    }

    onChangeNumber = event => {
        const reverseNumber = event.currentTarget.value;

        if (this.state.originalNumber.length !== reverseNumber.length) {
            return;
        }

        let result = this.validateSameReverse(this.state.originalNumber, reverseNumber);

        let resultMessage = result ? 'Correct!' : 'Incorrect, try again.';

        this.setState({
            resultMessage: resultMessage
        })
    }

    validateSameReverse(originalNumber, reverseNumber) {
        return originalNumber.split('').reverse().join('') === reverseNumber;
    }

    render() {
        return (
            <div>
                {
                    !this.state.originalNumber ?
                        <OriginalNumberFormComponent onSubmitOriginalNumber={this.onSubmitOriginalNumber} forwardedRef={this.originalNumberInput}></OriginalNumberFormComponent>
                        :
                        <ReverseNumberFormComponent onChangeNumber={this.onChangeNumber} resultMessage={this.state.resultMessage}></ReverseNumberFormComponent>
                }
            </div>
        );
    }
};

export default ReverseNumberGameComponent;