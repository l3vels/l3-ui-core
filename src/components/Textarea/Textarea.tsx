import { forwardRef } from "react";
// import useDebounceEvent from "src/hooks/useDebounceEvent";
import "./Textarea.scss";

import { L3ComponentProps, L3Component } from "../../types";
import useDebounceEvent from "../../hooks/useDebounceEvent";
interface TextareaProps extends L3ComponentProps {
  placeholder?: string;

  autoComplete?: string;
  initialValue?: string;
  value?: string;
  onChange?: (event: unknown) => void;
  onChangeCapture?: (event: unknown) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  debounceRate?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  setRef?: (node: HTMLElement) => void;
  iconName?: string | React.FunctionComponent | null;
  secondaryIconName?: string | React.FunctionComponent | null;
  title?: string;
  /** SIZES is exposed on the component itself */
  //   size?: TextFieldSize;
  /** Don't provide status for plain assistant text */
  validation?: { status?: "error" | "success"; text?: string }; // TODO make common validation class?
  wrapperClassName?: string;
  onIconClick?: (icon: string | React.FunctionComponent | null) => void;
  clearOnIconClick?: boolean;
  labelIconName?: string | React.FunctionComponent | null;
  showCharCount?: boolean;
  inputAriaLabel?: string;
  searchResultsContainerId?: string;
  activeDescendant?: string;
  /**  Icon names labels for a11y */
  iconsNames?: {
    layout: string;
    primary: string;
    secondary: string;
  };
  /** TEXT_TYPES is exposed on the component itself */
  //   type?: TextFieldTextType;
  maxLength?: number;
  trim?: boolean;
  /** ARIA role for container landmark */
  role?: string;
  /** adds required to the input element */
  required?: boolean;
  /** shows loading animation */
  loading?: boolean;
  dataTestId?: string;
  secondaryDataTestId?: string;
  tabIndex?: number;
  name?: string;
  cols?: number;
  rows?: number;
  maxLenght?: number;
  minLenght?: number;
  onInvalid: (event: unknown) => void;
  onInvalidCapture: (event: unknown) => void;
  onSelect: (event: unknown) => void;
  onSelectCapture: (event: unknown) => void;
}

const Textarea: L3Component<TextareaProps, unknown> = forwardRef(
  ({
    // className = "",
    placeholder = "your story",
    autoComplete = "off",
    initialValue,
    value,
    onChange,
    onChangeCapture,
    // onBlur = NOOP,
    // onFocus = NOOP,
    // onKeyDown = NOOP,
    debounceRate = 0,
    autoFocus = false,
    disabled = false,
    readonly = false,
    // setRef = NOOP,
    // iconName,
    // secondaryIconName,
    // id = "input",
    // title = "",
    // size = TextField.sizes.SMALL,
    // validation = null,
    // wrapperClassName = "",
    // onIconClick = NOOP,
    // clearOnIconClick = false,
    // labelIconName,
    // showCharCount = false,
    // inputAriaLabel,
    // searchResultsContainerId = "",
    // activeDescendant = "",
    // iconsNames = EMPTY_OBJECT,
    // type = TextFieldTextType.TEXT,
    // maxLength = null,
    // trim = false
    // role = "",
    required = false,
    // loading = false,
    // dataTestId,
    // secondaryDataTestId,
    // tabIndex,
    name,
    cols = 50,
    rows = 10,
    maxLenght = 1200,
    minLenght,
    onInvalid,
    onInvalidCapture,
    onSelect,
    onSelectCapture
  }) => {
    // const inputRef = useRef(null);

    const { inputValue, onEventChanged } = useDebounceEvent({
      delay: debounceRate,
      onChange,
      initialStateValue: value
    });

    return (
      <div className="mainWrapper">
        <div className="labelTop">
          {inputValue ? inputValue.length : 0}/{maxLenght}
        </div>
        <textarea
          className="textarea_input"
          value={inputValue}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={initialValue}
          cols={cols}
          rows={rows}
          disabled={disabled}
          maxLength={maxLenght}
          minLength={minLenght}
          name={name}
          onChange={onEventChanged}
          onChangeCapture={onChangeCapture}
          onInvalid={onInvalid}
          onInvalidCapture={onInvalidCapture}
          onSelect={onSelect}
          onSelectCapture={onSelectCapture}
          readOnly={readonly}
          required={required}
        />
      </div>
    );
  }
);

export default Textarea;
