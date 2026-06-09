"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { StaffGrid } from "./staff-grid";
import { Staff } from "@/types/staff";
import { Card, CardContent } from "../ui/card";
import { Building2, Search, Users, X } from "lucide-react";
import { Badge } from "../ui/badge";

interface StaffDirectoryProps {
  staff: Staff[];
}

export function StaffDirectory({ staff }: StaffDirectoryProps) {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [department, setDepartment] = useState("all");
  const [unit, setUnit] = useState("all");

  const normalizedSearch = search.trim().toLowerCase();

  const departments = useMemo(() => {
    const values = staff.map(member => member.department?.name).filter(Boolean);

    return [...new Set(values)];
  }, [staff]);

  const filteredStaff = useMemo(() => {
    return staff.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        fullName.includes(normalizedSearch) ||
        member.job_title?.toLowerCase().includes(normalizedSearch) ||
        member.email?.toLowerCase().includes(normalizedSearch);

      const matchesDepartment =
        department === "all" || member.department?.name === department;

      const matchesUnit = unit === "all" || member.unit === unit;

      return matchesSearch && matchesDepartment && matchesUnit;
    });
  }, [staff, search, department, unit]);

  const clearFilters = () => {
    setSearch("");
    setSearchInput("");
    setDepartment("all");
    setUnit("all");
  };

  const units = useMemo(() => {
    return [
      ...new Set(
        staff
          .map(member => member.unit)
          .filter((unit): unit is string => typeof unit === "string"),
      ),
    ];
  }, [staff]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Search */}

            <div className="lg:col-span-6">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search
                    className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
                  />

                  <Input
                    placeholder="Search by name, title or email..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        setSearch(searchInput);
                      }
                    }}
                    className="pl-10"
                  />
                </div>

                <Button onClick={() => setSearch(searchInput)}>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            {/* Department */}

            <div className="lg:col-span-3">
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger>
                  <Building2 className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>

                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Unit */}

            <div className="lg:col-span-3">
              <Select value={unit} onValueChange={setUnit}>
                <SelectTrigger>
                  <Users className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All Units</SelectItem>

                  {units.map(item => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {search && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  Search: {search}
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setSearchInput("");
                    }}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              {department !== "all" && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  {department}

                  <button
                    type="button"
                    onClick={() => setDepartment("all")}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}

              {unit !== "all" && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  {unit}

                  <button
                    type="button"
                    onClick={() => setUnit("all")}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>

            {/* Results Summary */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">
                  {
                    [
                      search && "search",
                      department !== "all" && "department",
                      unit !== "all" && "unit",
                    ].filter(Boolean).length
                  }{" "}
                  active filters
                </Badge>

                <Badge variant="secondary">{filteredStaff.length}</Badge>

                <span className="text-sm text-muted-foreground">
                  of {staff.length} staff members
                </span>
              </div>

              <Button variant="outline" onClick={clearFilters}>
                <X className="mr-2 h-4 w-4" />
                Clear All Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {filteredStaff.length > 0 ? (
        <StaffGrid staff={filteredStaff} />
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="mx-auto h-10 w-10 text-muted-foreground" />

            <h3 className="mt-4 text-lg font-semibold">No staff found</h3>

            <p className="mt-2 text-muted-foreground">
              Try adjusting your search criteria.
            </p>

            <Button variant="outline" className="mt-6" onClick={clearFilters}>
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
