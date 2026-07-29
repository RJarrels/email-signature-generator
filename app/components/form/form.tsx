"use client";
import { formatPhoneNumber } from "@/app/scripts/formatNumber";
import { DataProps } from "@/app/scripts/data";
import { useLanguage } from "@/app/context/language-context";
interface FormProps {
  info: DataProps;
  setInfo: React.Dispatch<React.SetStateAction<DataProps>>;
}
export function Form({info, setInfo}: FormProps) {
  const { language, locale } = useLanguage();
  const messages = locale.messages[0];

  return (
    <form id="genForm">
      {/* NAME */}
      <div className="form-entry">
        <label>{messages.name}</label>

        <input
          type="text"
          value={info.name}
          onChange={(e) =>
            setInfo({ ...info, name: e.target.value })
          }
        />
      </div>

      {/* JOB */}
      <div className="form-entry">
        <label>{messages.job}</label>

        <input
          type="text"
          value={info.jobTitle}
          onChange={(e) =>
            setInfo({ ...info, jobTitle: e.target.value })
          }
        />
      </div>

      {/* PHONE */}
      <div className="form-entry">
        <label>{messages.mobile}</label>

        <div className="button-switch">
          <button
            type="button"
            className={info.showMobilePhone ? "active" : ""}
            onClick={() => setInfo({ ...info, showMobilePhone: true })}
          >
            Yes
          </button>
          <button
            type="button"
            className={info.showMobilePhone ? "" : "active"}
            onClick={() =>
              setInfo({ ...info, showMobilePhone: false, mobilePhone: "" })
            }
          >
            No
          </button>
        </div>

        {info.showMobilePhone && (
          <div className="optional optional-phone-mobile">
            <label>{messages.mobilePhone}</label>
            <input
              type="tel"
              value={info.mobilePhone}
              onChange={(e) => {
                const formatted = formatPhoneNumber({
                  entry: e.target.value,
                  ruleset: language,
                });

                setInfo({ ...info, mobilePhone: formatted });
              }}
            />
          </div>
        )}
      </div>

      {/* BACKGROUND TOGGLE */}
      <div className="toggleBg">
        <label className="switch">
          <input
            type="checkbox"
            checked={info.whiteBg}
            onChange={(e) => setInfo({ ...info, whiteBg: e.target.checked })}
          />
          <span className="slider"></span>
        </label>
        <span className="toggleMsg">{messages.toggle}</span>
      </div>
    </form>
  );
}

