import React, { memo } from "react";
import Template from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "../getKcContext/KcContextBase";
import { useCssAndCx } from "../tools/useCssAndCx";
import type { I18n } from "../i18n";

const LoginUpdateProfile = memo(({ kcContext, i18n, ...props }: { kcContext: KcContextBase.LoginUpdateProfile; i18n: I18n } & KcProps) => {
    const { cx } = useCssAndCx();

    const { msg, msgStr } = i18n;

    const { url, user, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            {...{ kcContext, i18n, ...props }}
            doFetchDefaultThemeResources={true}
            headerNode={msg("loginProfileTitle")}
            formNode={
                <form id="kc-update-profile-form" className={cx(props.kcFormClass)} action={url.loginAction} method="post">
                    {user.editUsernameAllowed && (
                        <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("username", props.kcFormGroupErrorClass))}>
                            <div className={cx(props.kcLabelWrapperClass)}>
                                <label htmlFor="username" className={cx(props.kcLabelClass)}>
                                    {msg("username")}
                                </label>
                            </div>
                            <div className={cx(props.kcInputWrapperClass)}>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    defaultValue={user.username ?? ""}
                                    className={cx(props.kcInputClass)}
                                />
                            </div>
                        </div>
                    )}

                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("email", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="email" className={cx(props.kcLabelClass)}>
                                {msg("email")}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input type="text" id="email" name="email" defaultValue={user.email ?? ""} className={cx(props.kcInputClass)} />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("firstName", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="firstName" className={cx(props.kcLabelClass)}>
                                {msg("firstName")}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                defaultValue={user.firstName ?? ""}
                                className={cx(props.kcInputClass)}
                            />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass, messagesPerField.printIfExists("lastName", props.kcFormGroupErrorClass))}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="lastName" className={cx(props.kcLabelClass)}>
                                {msg("lastName")}
                            </label>
                        </div>
                        <div className={cx(props.kcInputWrapperClass)}>
                            <input type="text" id="lastName" name="lastName" defaultValue={user.lastName ?? ""} className={cx(props.kcInputClass)} />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass)}>
                        <div id="kc-form-options" className={cx(props.kcFormOptionsClass)}>
                            <div className={cx(props.kcFormOptionsWrapperClass)} />
                        </div>

                        <div id="kc-form-buttons" className={cx(props.kcFormButtonsClass)}>
                            {isAppInitiatedAction ? (
                                <>
                                    <input
                                        className={cx(props.kcButtonClass, props.kcButtonPrimaryClass, props.kcButtonLargeClass)}
                                        type="submit"
                                        defaultValue={msgStr("doSubmit")}
                                    />
                                    <button
                                        className={cx(props.kcButtonClass, props.kcButtonDefaultClass, props.kcButtonLargeClass)}
                                        type="submit"
                                        name="cancel-aia"
                                        value="true"
                                    >
                                        {msg("doCancel")}
                                    </button>
                                </>
                            ) : (
                                <input
                                    className={cx(
                                        props.kcButtonClass,
                                        props.kcButtonPrimaryClass,
                                        props.kcButtonBlockClass,
                                        props.kcButtonLargeClass
                                    )}
                                    type="submit"
                                    defaultValue={msgStr("doSubmit")}
                                />
                            )}
                        </div>
                    </div>
                </form>
            }
        />
    );
});

export default LoginUpdateProfile;
