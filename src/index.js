import React, { createContext, useEffect, useState, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useContext, Component } from 'react';
import { ThemeProvider, useTheme, createTheme, experimental_sx as sx } from '@mui/material/styles';
import { EditorContextProvider as EditorCtx, EditorViewer } from "./EditorContextProvider";
import { Button, CssBaseline, Switch, Typography } from '@mui/material';


import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@mui/material/colors';

const colorArr = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey]


function useColorObj(colorIndex = 5) {

    const [colorObj, setColorIndex] = useState(colorArr[colorIndex])

    function setColorObj(index) {
        setColorIndex(colorArr[index])
    }

    return [colorObj, setColorObj]

}


export function DraftEditor({

    cssBaseLine = true,
    themeMode = "light",
    colorIndex = "5",
    peopleList = ["UweF23", "UweF22", "TonyCerl", "JimWil", "大发发", "Jimberg", "m大Gsd哈"],
    avatarPeopleList = ["UweF23", "TonyCerl", "大发发", "m大Gsd哈"],
    downloadAvatarUrl = "https://picsum.photos/200",
    genAvatarLink = function (downloadAvatarUrl, personName) {
        return downloadAvatarUrl// + personName
    },
    onChange,
    onSubmit,
    ...props }) {


    const [sizeObj, setSizeObj] = useState(props.sizeObj || { xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "1.5rem" })
    const [colorObj, setColorObj] = useColorObj(Number(colorIndex) % colorArr.length)



    const scaleSizeObj = useCallback((factor = 1) => {
        const obj = {}
        Object.keys(sizeObj).forEach(itemKey => {

            const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
            const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
            obj[itemKey] = num + unit

        })

        return obj
    }, [sizeObj])


    const addingSizeObj = useCallback((numOfPix = 0) => {
        const obj = {}
        Object.keys(sizeObj).forEach(itemKey => {

            //  const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
            //  const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
            obj[itemKey] = `calc(${sizeObj[itemKey]} ${numOfPix >= 0 ? "+" : "-"} ${Math.abs(numOfPix)}px)`

        })

        return obj
    }, [sizeObj])


    const [mode, setMode] = React.useState(themeMode || 'light');
    useEffect(function () {
        setMode(themeMode)

    }, [themeMode])

    useEffect(function () {
        setColorObj(Number(colorIndex) % colorArr.length)

    }, [colorIndex])


    const colorBgObj = mode === "light"
        ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
        : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`


    const myTheme = React.useMemo(
        () =>
            createTheme({

                typography: {
                    button: {
                        textTransform: 'none'
                    }
                },

                palette: {
                    mode,
                    panelColor: mode === "light" ? "lightgray" : "darkgray",
                    mentionBg: mode === "light" ? "aliceblue" : "skyblue",
                },
                sizeObj,
                setSizeObj,

                colorArr,
                colorObj, setColorObj,
                colorBgObj,

                setMode,
                scaleSizeObj,
                addingSizeObj,
                mode,
                isLight: mode === "light",
                isDark: mode === "dark",

                components: {

                    MuiButton: {
                        defaultProps: {
                            variant: "contained",
                            disableRipple: false,
                        },
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({

                                        bgcolor: theme.isLight
                                            ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
                                            : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`,
                                        color: theme.palette.text.secondary,
                                        fontSize: theme.addingSizeObj(-5),
                                        "&:hover": {
                                            bgcolor: theme.isLight ? colorObj[300] : colorObj[500],
                                        },
                                        backdropFilter: "blur(20px)",
                                    }),

                                ]
                            }
                        }

                    },
                    MuiPaper: {
                        defaultProps: {

                        },
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({
                                        fontSize: theme.sizeObj,
                                    }),

                                ]
                            }
                        }
                    },
                    MuiTypography: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    ownerState.variant === 'body2' &&
                                    sx({
                                        fontSize: theme.sizeObj,

                                    }),

                                ]
                            }
                        }

                    },

                    MuiSvgIcon: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({
                                        color: theme.palette.text.secondary,
                                    }),

                                ]
                            }
                        }
                    },
                    MuiSwitch: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {
                                return [
                                    //  ownerState.variant === 'body2' &&
                                    theme.isDark && sx({
                                        "& .MuiSwitch-thumb": {
                                            color: colorObj[300]
                                        },
                                    }),

                                ]
                            }
                        }
                    },
                    MuiSlider: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {
                                return [
                                    //  ownerState.variant === 'body2' &&
                                    // theme.isDark && sx({
                                    //     "& .MuiSwitch-thumb": {
                                    //         color: colorObj[300]
                                    //     },
                                    // }),

                                ]
                            }
                        }




                    }



                }
            }),
        [mode, sizeObj, colorObj],
    );

    return (

        <ThemeProvider theme={myTheme}>
            {cssBaseLine && <CssBaseline />}
            <EditorCtx

                peopleList={peopleList}
                avatarPeopleList={avatarPeopleList}
                downloadAvatarUrl={downloadAvatarUrl}
                genAvatarLink={genAvatarLink}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </ThemeProvider>


    )
}


export function DraftViewer({
    cssBaseLine = true,
    themeMode = "light",
    colorIndex = "5",
    preHtml = "",
    downloadImageUrl = "",
    downloadVoteUrl = "",
    avatarPeopleList = ["UweF23", "TonyCerl", "大发发", "m大Gsd哈"],
    downloadAvatarUrl = "https://picsum.photos/200",
    genAvatarLink = function (downloadAvatarUrl, personName) {
        return downloadAvatarUrl// + personName
    },
    ...props }) {


    const [sizeObj, setSizeObj] = useState(props.sizeObj || { xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem", xl: "1.5rem" })
    const [colorObj, setColorObj] = useColorObj(Number(colorIndex) % colorArr.length)


    const scaleSizeObj = useCallback((factor = 1) => {
        const obj = {}
        Object.keys(sizeObj).forEach(itemKey => {

            const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
            const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
            obj[itemKey] = num + unit

        })

        return obj
    }, [sizeObj])

    const addingSizeObj = useCallback((numOfPix = 0) => {
        const obj = {}
        Object.keys(sizeObj).forEach(itemKey => {

            //  const num = Number(sizeObj[itemKey].replace(/[^\d\.]/g, '')) * factor
            //  const unit = String(sizeObj[itemKey].replace(/[\d\.]/g, ''))
            obj[itemKey] = `calc(${sizeObj[itemKey]} ${numOfPix >= 0 ? "+" : "-"} ${Math.abs(numOfPix)}px)`

        })

        return obj
    }, [sizeObj])

    const [mode, setMode] = React.useState(themeMode || 'light');

    useEffect(function () {
        setMode(themeMode)

    }, [themeMode])

    useEffect(function () {
        setColorObj(Number(colorIndex) % colorArr.length)

    }, [colorIndex])


    const colorBgObj = mode === "light"
        ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
        : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`



    const myTheme = React.useMemo(
        () =>
            createTheme({

                typography: {
                    button: {
                        textTransform: 'none'
                    }
                },

                palette: {
                    mode,
                    panelColor: mode === "light" ? "lightgray" : "darkgray",
                    mentionBg: mode === "light" ? "aliceblue" : "skyblue",
                },
                sizeObj,
                setSizeObj,

                colorArr,
                colorObj, setColorObj,
                colorBgObj,

                setMode,
                scaleSizeObj,
                addingSizeObj,
                mode,
                isLight: mode === "light",
                isDark: mode === "dark",

                components: {

                    MuiButton: {
                        defaultProps: {
                            variant: "contained",
                            disableRipple: false,
                        },
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({

                                        bgcolor: theme.isLight
                                            ? `rgba( ${hexToRgb(colorObj[100]).r}, ${hexToRgb(colorObj[100]).g}, ${hexToRgb(colorObj[100]).b},   0.5)`
                                            : `rgba( ${hexToRgb(colorObj[900]).r}, ${hexToRgb(colorObj[900]).g}, ${hexToRgb(colorObj[900]).b},   0.5)`,
                                        color: theme.palette.text.secondary,
                                        fontSize: theme.addingSizeObj(-5),
                                        "&:hover": {
                                            bgcolor: theme.isLight ? colorObj[300] : colorObj[500],
                                        },
                                        backdropFilter: "blur(20px)",
                                    }),

                                ]
                            }
                        }

                    },
                    MuiPaper: {
                        defaultProps: {

                        },
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({
                                        fontSize: theme.sizeObj,
                                    }),

                                ]
                            }
                        }
                    },
                    MuiTypography: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    ownerState.variant === 'body2' &&
                                    sx({
                                        fontSize: theme.sizeObj,

                                    }),

                                ]
                            }
                        }

                    },

                    MuiSvgIcon: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {

                                return [
                                    //  ownerState.variant === 'body2' &&
                                    sx({
                                        color: theme.palette.text.secondary,
                                    }),

                                ]
                            }
                        }
                    },
                    MuiSwitch: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {
                                return [
                                    //  ownerState.variant === 'body2' &&
                                    theme.isDark && sx({
                                        "& .MuiSwitch-thumb": {
                                            color: colorObj[300]
                                        },
                                    }),

                                ]
                            }
                        }
                    },
                    MuiSlider: {
                        styleOverrides: {
                            root: ({ ownerState, theme, ...props }) => {
                                return [
                                    //  ownerState.variant === 'body2' &&
                                    // theme.isDark && sx({
                                    //     "& .MuiSwitch-thumb": {
                                    //         color: colorObj[300]
                                    //     },
                                    // }),

                                ]
                            }
                        }




                    }



                }
            }),
        [mode, sizeObj, colorObj],
    );

    return (

        <ThemeProvider theme={myTheme}>
            <>
                {cssBaseLine && <CssBaseline />}
                <EditorViewer
                    preHtml={preHtml}
                    downloadImageUrl={downloadImageUrl}
                    downloadVoteUrl={downloadVoteUrl}

                    avatarPeopleList={avatarPeopleList}
                    downloadAvatarUrl={downloadAvatarUrl}
                    genAvatarLink={genAvatarLink}

                />
            </>
        </ThemeProvider>
    )
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}