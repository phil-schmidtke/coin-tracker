"use client";

import { ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function CurrentChart({data}: any) {
	const chartContainerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(
		() => {
            if (chartContainerRef.current) {
                const handleResize = () => {
                    chart.applyOptions({ width: chartContainerRef.current.clientWidth });
                };

                const initialData = [
                    { time: '2018-12-22', value: 32.51 },
                    { time: '2018-12-23', value: 31.11 },
                    { time: '2018-12-24', value: 27.02 },
                    { time: '2018-12-25', value: 27.32 },
                    { time: '2018-12-26', value: 25.17 },
                    { time: '2018-12-27', value: 28.89 },
                    { time: '2018-12-28', value: 25.46 },
                    { time: '2018-12-29', value: 23.92 },
                    { time: '2018-12-30', value: 22.68 },
                    { time: '2018-12-31', value: 22.67 },
                ];

                const backgroundColor = '#171717';
                const lineColor = '#9333ea';
                const textColor = 'white';
                const areaTopColor = '#9333ea';
                const areaBottomColor = '#6f1fb8';

                const chart = createChart(chartContainerRef.current, {
                    layout: {
                        background: { type: ColorType.Solid, color: backgroundColor },
                        textColor,
                    },
                    grid: {
                        vertLines: { color: '#262626' },
                        horzLines: { color: '#262626' },
                    },
                    width: chartContainerRef.current.clientWidth,
                    height: 500,
                });
                chart.timeScale().fitContent();

                const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
                newSeries.setData(data.Data.Data);

                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);

                    chart.remove();
                };
            }
		},
		[]
	);

    return (
		<div
			ref={chartContainerRef}
		/>
	);
}