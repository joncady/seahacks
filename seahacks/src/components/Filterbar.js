import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { Button, ButtonGroup, Row, Col, Input} from 'reactstrap';
import { Column, DropDownGroup, DropDownOption, Button as AuroraButton} from '@ticketmaster/aurora';
import PropTypes from 'prop-types';

export default class Filterbar extends React.Component {

    static propTypes = {
        onDateSelected: PropTypes.func.isRequired,
        onDateChange: PropTypes.func,
        onDistanceChange: PropTypes.func,
        onZipChange: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            focusedInput: null
        }
    }

    render() {
        console.log(this.props.startDate, this.props.endDate);
        console.log(this.props.distance);
        console.log('zipcode_start:');
        console.log(this.props.zipcode);
        console.log('zipcode_end:');

        return (
            <React.Fragment>
            <Col xs={2} >
                <DropDownGroup size="small" variant={1} placeholder="Date" onChange={this.props.onDateSelected}>
                    <DropDownOption value="today" index={0}>Today</DropDownOption>
                    <DropDownOption value="tomorrow" index={1}>Tomorrow</DropDownOption>
                    <DropDownOption value="weekend" index={2}>This Weekend</DropDownOption>
                </DropDownGroup>
            </Col>

            <Col xs={4}>
                 <DateRangePicker
                     startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                     startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                     endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                     endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                     //onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                     onDatesChange={({startDate, endDate}) => this.props.onDateChange(startDate, endDate)}
                     focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                     onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                 />
            </Col>

            <Col xs={2}>
                <input type='text' className='DateInput_input DateInput_input_1' placeholder='Zipcode' onChange={this.props.onZipChange}></input>
            </Col>

            <Column medium={2}>
                <DropDownGroup size="small" variant={1} placeholder="Distance" onChange={this.props.onDistanceChange}>
                    <DropDownOption value="5" index={0}>5 miles</DropDownOption>
                    <DropDownOption value="10" index={1}>10 miles</DropDownOption>
                    <DropDownOption value="15" index={2}>15 miles</DropDownOption>
                    <DropDownOption value="25" index={3}>25 miles</DropDownOption>
                    <DropDownOption value="50" index={4}>50 miles</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={2}>
                <AuroraButton>Refresh</AuroraButton>
            </Column>
            </React.Fragment>
        );
    }
}