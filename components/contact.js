var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className={'contactObject'}>
                <img className={'contactImage'} src={'http://www.vincegolangco.com/wp-content/uploads/2010/12/priest-for-facebook.jpg'}>
                <p className={'contactLabel'}>
                    Imie: {this.props.item.firstName}
                </p>
                <p className={'contactLabel'}>
                    Nazwisko: {this.props.item.lastName}
                </p>
                <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
            );
        }
});