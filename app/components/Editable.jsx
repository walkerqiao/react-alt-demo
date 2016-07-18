import React from 'react';
import classnames from 'classnames';

export default ({editing, value, onEdit, className, ...props}) => {
    if(editing) {
        return <Edit className={className} value={value} onEdit={onEdit} {...props} />;
    }

    return <span className={classnames('value', className)} {...props}>{value}</span>;
}

class Edit extends React.Component {
    render() {
        const {value, className, ...props} = this.props;

        return <input
            type="text"
            className={classnames('edit', className)}
            autoFocus={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            // {...props} // 这里注释掉才可以，因为input有些属性是不支持的，会告警
             />;
    }
    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    }
    finishEdit = (e) => {
        const value = e.target.value;

        if(this.props.onEdit) {
            this.props.onEdit(value);
        }
    }
}
