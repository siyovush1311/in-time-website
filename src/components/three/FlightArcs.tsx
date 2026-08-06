"use client";

import { useMemo } from "react";
import { QuadraticBezierLine } from "@react-three/drei";

type Point = [number, number, number];

const RADIUS = 2.02;

function latLngToVector3(
  lat: number,
  lng: number,
  radius = RADIUS
): Point {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

export default function FlightArcs() {
  const routes = useMemo(
    () => [
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(51.5072, -0.1276), // Лондон
        height: 1.9,
      },
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(25.2048, 55.2708), // Дубай
        height: 1.4,
      },
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(55.7558, 37.6173), // Москва
        height: 1.3,
      },
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(41.0082, 28.9784), // Стамбул
        height: 1.5,
      },
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(39.9042, 116.4074), // Пекин
        height: 1.8,
      },
      {
        start: latLngToVector3(38.5598, 68.7870), // Душанбе
        end: latLngToVector3(40.7128, -74.0060), // Нью-Йорк
        height: 2.2,
      },
    ],
    []
  );

  return (
    <group>
      {routes.map((route, index) => {
        const mid: Point = [
          (route.start[0] + route.end[0]) / 2,
          (route.start[1] + route.end[1]) / 2 + route.height,
          (route.start[2] + route.end[2]) / 2,
        ];

        return (
          <group key={index}>
            {/* Мягкое внешнее свечение */}
            <QuadraticBezierLine
              start={route.start}
              end={route.end}
              mid={mid}
              color="#00C8FF"
              lineWidth={2.8}
              transparent
              opacity={0.12}
            />

            {/* Основная линия */}
            <QuadraticBezierLine
              start={route.start}
              end={route.end}
              mid={mid}
              color="#00C8FF"
              lineWidth={1.2}
              transparent
              opacity={0.95}
            />
          </group>
        );
      })}
    </group>
  );
}