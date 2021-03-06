import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from '../../common/Button';

const cx = classNames.bind(styles);

const Pagination = () => (
    <div className={cx('pagination')}>
        <Button disabled>
            Prev
        </Button>
        <div className={cx('number')}>
            page 1
        </div>
        <Button>
            Next
        </Button>
    </div>
);

export default Pagination;