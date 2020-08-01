import React from "react";
import { connect } from 'react-redux';
import {
    IdFilterCreator
} from '../../../../redux/actionHomeFilterCreators';

const FilterById = ({
    setFilterIdFunc,
    cancel,
    idFilter
}) => {

    // const [idField, setIdField] = useState(idFilter);

  return (
    <div className="window-id">
      {/* <div className="idField window-id__wrapper"> */}
        {/* <input type="number" onChange={e => setIdField(e.target.value)} value={idField} placeholder="введите ID" /> */}
        <input
          type="number"
          onChange={e => setFilterIdFunc(e.target.value)}
          value={idFilter}
          placeholder="введите ID"
          className="window-id__input"
        />
        {/* <p
          className="searchButton"
          onClick={e => cancel()}
        >
          Найти
        </p> */}
        <button
          type="button"
          className="
          searchButton
          window-id__button
          window-id__button--find"
          onClick={e => cancel()}
        >
          Найти
        </button>
      {/* </div> */}
      {/* <p
        className="cancelSearchById window-id__button window-id__button--cancel"
        onClick={e => (setFilterIdFunc(''), cancel())}
      >
        Отмена
      </p> */}
      <button
        type="button"
        className="
        cancelSearchById
        window-id__button
        window-id__button--cancel"
        onClick={() => {
          setFilterIdFunc('');
          cancel();
        }}
      >
        Отмена
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFilterIdFunc: (selectedOption) => dispatch(IdFilterCreator(selectedOption))
});

const Enhanced = connect(null, mapDispatchToProps)(FilterById);

export { Enhanced as FilterById };